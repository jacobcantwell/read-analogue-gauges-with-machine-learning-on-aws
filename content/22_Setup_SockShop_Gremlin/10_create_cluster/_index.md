+++
title = "1.1 Create a cluster"
chapter = true
weight = 01
+++

# eksctl cluster creation 


[eksctl](https://eksctl.io/introduction/) makes it simple to provision Kubernetes clusters in EKS. For this workshop, we will create a defauklt three node EKS cluster. With `eksctl`, this is a single command line:

```
eksctl create cluster --name sockshop-eks-cluster --version 1.15 --region us-west-2 --nodegroup-name standard-workers --node-type t3.medium --nodes 3 --nodes-min 1 --nodes-max 4
```

You will see a number of messages scroll, ending with the `kubeconfig` message

<pre>
[ℹ]  waiting for at least 1 node(s) to become ready in "standard-workers"
[ℹ]  nodegroup "standard-workers" has 3 node(s)
[ℹ]  node "ip-192-168-4-140.us-west-2.compute.internal" is not ready
[ℹ]  node "ip-192-168-44-26.us-west-2.compute.internal" is not ready
[ℹ]  node "ip-192-168-79-117.us-west-2.compute.internal" is ready
[ℹ]  kubectl command should work with "/home/ec2-user/.kube/config", try 'kubectl get nodes'
[✔]  EKS cluster "sockshop-eks-cluster" in "us-west-2" region is ready
</pre>
