---
source: https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/etcd-update-test.md
last_synced: 2025-10-23T01:19:57.541Z
automated: true
---

> **Source:** This documentation is automatically synced from [octoroute/documentation/etcd-update-test.md](https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/etcd-update-test.md)  
> **Last Updated:** 2025-10-23

## Description

This document outlines the procedure for directly interacting with and modifying the etcd database in a Kubernetes cluster. **WARNING: This is a highly dangerous operation and should only be performed by authorized personnel with a deep understanding of Kubernetes internals. Direct modification can lead to cluster instability or complete failure.**

## Introduction to etcd

etcd is the consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data. While interaction is typically handled by the Kubernetes API server, rare emergency scenarios may require direct access to view or modify this data. This guide provides the necessary steps to connect to the etcd pod and use the `etcdctl` utility.

## Prerequisites

- You must have `kubectl` access to the Kubernetes cluster with permissions to `exec` into pods in the `kube-system` namespace.
- You'll need access to a terminal on a machine that can connect to the cluster.
- A clear understanding of the key-value structure you intend to modify is essential.
- A full backup of the etcd database must be taken before proceeding.

## Interacting with the etcd Database

The following sections cover how to access the etcd pod and manipulate data using `etcdctl`.

### Connecting to the etcd Pod

To begin, you need to identify and execute a shell inside the etcd pod running on one of the control plane nodes.

```bash
# Find the etcd pod name
ETCD_POD=$(kubectl get pod -n kube-system -l component=etcd -o jsonpath='{.items[0].metadata.name}')

# Execute a shell inside the etcd pod
kubectl exec -it $ETCD_POD -n kube-system -- /bin/sh
Modifying Data with etcdctl
Once inside the pod, all interactions are performed with the etcdctl binary. You must provide the correct API version and authentication credentials for commands to work.

Set Environment Variables (inside the pod shell):
These variables are necessary for etcdctl to authenticate with the etcd server.

```

```bash
export ETCDCTL_API=3
export ETCDCTL_CACERT=/etc/kubernetes/pki/etcd/ca.crt
export ETCDCTL_CERT=/etc/kubernetes/pki/etcd/server.crt
export ETCDCTL_KEY=/etc/kubernetes/pki/etcd/server.key
```

Example Commands:
Here are some common etcdctl operations.

Bash

# Get a specific key (e.g., a configmap)
etcdctl get /registry/configmaps/default/my-configmap

# Put (create or update) a key. The value must be in the correct proto format.
# This is an expert-level task and not recommended without proper serialization.
etcdctl put /registry/customkey/my-key "my-value"

# Delete a key
etcdctl del /registry/customkey/my-key
Common etcd Key Prefixes
The following table lists common prefixes for Kubernetes objects stored in etcd, which can help you locate the data you need to inspect or modify.

Object Type	etcd Key Prefix
Pods	/registry/pods
Services	/registry/services
ConfigMaps	/registry/configmaps
Secrets	/registry/secrets

This is a test for checking if it updates both files
This is the last test before demo.
Final fix documentation fix.