---
source: https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/deploying-new-service.md
last_synced: 2025-10-24T15:57:56.257Z
automated: true
---

> **Source:** This documentation is automatically synced from [octoroute/documentation/deploying-new-service.md](https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/deploying-new-service.md)  
> **Last Updated:** 2025-10-24

Description

This document outlines the procedure for creating a **Service** in a Kubernetes cluster to expose a set of Pods (Deployment or ReplicaSet) to internal or external network traffic. A Service is a fundamental and safe Kubernetes primitive for achieving stable network connectivity.

## Introduction to Services

A Kubernetes Service is an abstract way to expose an application running on a set of Pods as a network service. Services use **Selectors** to identify the Pods they should route traffic to. They provide a stable IP address and DNS name, allowing clients to reliably connect to the application, even as the backing Pods are created, killed, and moved.

## Prerequisites

You must have **kubectl** access to the Kubernetes cluster with permissions to create Services and Deployments.
You should have a running **Deployment** or **ReplicaSet** in your cluster that you wish to expose.
You'll need access to a terminal on a machine that can connect to the cluster.
A clear understanding of the **target port** (where the container listens) and the **service port** (where the service listens) is essential.

## Creating a Service

The following sections cover how to define and deploy different types of Kubernetes Services using a YAML manifest.

### Service Types

Kubernetes supports several types of Services to meet different exposure requirements:

| Service Type | Description | Use Case |
| :--- | :--- | :--- |
| **ClusterIP** | Exposes the Service on an internal IP address inside the cluster. Only reachable from within the cluster. | Internal application communication. |
| **NodePort** | Exposes the Service on each Node's IP at a static port (the NodePort). **ClusterIP** is automatically created. | Simple external access for testing or non-production. |
| **LoadBalancer** | Creates an external cloud load balancer (requires a cloud provider) that routes traffic to the Service. **NodePort** and **ClusterIP** are automatically created. | Standard way to expose a production application to the public internet. |
| **ExternalName** | Maps the Service to a content of the `externalName` field (e.g., `foo.bar.example.com`) by returning a `CNAME` record. No proxying is involved. | Proxying to an external service outside the cluster. |

### Creating a ClusterIP Service (YAML)

To create a basic internal Service, define a YAML file, such as `my-clusterip-service.yaml`.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-internal
spec:
  selector:
    app: my-web-app # Must match the label on your target Pods
  ports:
    - protocol: TCP
      port: 80        # The port the Service exposes
      targetPort: 8080 # The port the container is listening on
  type: ClusterIP
```

Applying the Manifest:

Bash

kubectl apply -f my-clusterip-service.yaml
Creating a LoadBalancer Service (YAML)
To create a Service exposed via a cloud Load Balancer, modify the type field.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-external
spec:
  selector:
    app: my-web-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer # Changed from ClusterIP
Applying the Manifest:
```

Bash

kubectl apply -f my-loadbalancer-service.yaml
Verifying the Service
After deployment, check the status of your new Service using the following command:

Bash

# Get Service status (ClusterIP, External IP, and Ports)
kubectl get svc my-app-external
For a LoadBalancer Service, monitor the EXTERNAL-IP column until it is provisioned by the cloud provider.
