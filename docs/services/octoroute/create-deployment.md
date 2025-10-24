---
source: https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/create-deployment.md
last_synced: 2025-10-24T16:16:29.653Z
automated: true
---

> **Source:** This documentation is automatically synced from [octoroute/documentation/create-deployment.md](https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/create-deployment.md)  
> **Last Updated:** 2025-10-24

Description

This document outlines the procedure for creating a **Deployment** in Kubernetes. Deployments are the standard, declarative way to manage replicated applications, providing self-healing, scaling, and controlled updates (rolling updates).

## Introduction to Deployments

A Deployment manages **ReplicaSets**, which ensure a specified number of identical **Pods** are running. It maintains the desired state by replacing failed Pods and managing updates to your application image.

## Prerequisites

You must have **kubectl** access with permissions to create Deployments.
A **container image** must be available in a registry that the cluster nodes can pull.

## Creating a Deployment

Define the Deployment in a YAML file (e.g., `my-app-deployment.yaml`).

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-web-app
spec:
  replicas: 3 # Target number of Pods
  selector:
    matchLabels:
      app: my-web-app-label
  template:
    metadata:
      labels:
        app: my-web-app-label
    spec:
      containers:
      - name: nginx-container
        image: nginx:latest # Image to use
        ports:
        - containerPort: 80
Applying and Verifying
To create the Deployment, use kubectl apply.
```

Bash

kubectl apply -f my-app-deployment.yaml
# Check status and ready replicas
kubectl get deployments
Scaling
To adjust the number of instances quickly:

Bash

# Scale the Deployment to 5 replicas
kubectl scale deployment/my-web-app --replicas=5
This is a test for checking if it updates both files This is the last test before demo. Final fix documentation fix.
