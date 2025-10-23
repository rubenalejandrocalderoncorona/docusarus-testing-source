---
source: https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/minikube-test.md
last_synced: 2025-10-23T01:19:57.544Z
automated: true
---

> **Source:** This documentation is automatically synced from [octoroute/documentation/minikube-test.md](https://github.com/rubenalejandrocalderoncorona/testing-remote-docs/blob/main/octoroute/documentation/minikube-test.md)  
> **Last Updated:** 2025-10-23


# Getting Started with Minikube

Minikube is a great tool for running a single-node Kubernetes cluster on your personal computer, which is perfect for development and learning. This guide will walk you through the basic steps to get it up and running.

### Prerequisites

Before you start, you'll need a hypervisor or container runtime. Docker is a common choice and generally works out-of-the-box. You also need to install the Minikube CLI itself. For macOS users, Homebrew is the recommended method.

`brew install minikube`

### Starting Your Local Cluster

Once the installation is complete, starting the cluster is done with a single command. This will download the necessary images and configure your local Kubernetes environment.

`minikube start`

You can specify a driver if you don't want to use the default. For example, to explicitly use Docker, you would run: `minikube start --driver=docker`.

### Interacting with Your Cluster

To check if the cluster is running correctly, use the status command: `minikube status`. This will confirm that the core components are active.

To interact with Kubernetes itself, you need `kubectl`. If you don't have it, you can install it using Homebrew as well (`brew install kubectl`). After that, your `kubectl` is automatically configured to point to your new Minikube cluster. You can verify the connection by listing the nodes in your cluster.

`kubectl get nodes`

You should see a single node with a status of 'Ready'.

### Accessing the Dashboard

The Kubernetes Dashboard provides a user-friendly web UI for managing your cluster. Minikube includes it as an addon that you can launch easily.

`minikube dashboard`

This command will open the dashboard in your default web browser, giving you a visual overview of your cluster's resources.

### Stopping and Deleting the Cluster

When you're finished, you can stop the cluster to free up system resources.

`minikube stop`

If you want to remove the cluster and all its associated files completely, use the delete command. This is a destructive action and will require you to run `minikube start` again to get a new cluster.

`minikube delete`

This is a test for Workflow. Second Test. Third Test.
This is the fourth test.
This is the final change to check calling.
New Change
Test for check works of flow
Final final test
This is a test to check OpenAI calling

This checks OpenAI calling working for the repository
This is a final test for doing the correct execution.
This is a test to check as well the behaviour of the current flow.
This is the last test. Before demo.
Final fix documentation sync.