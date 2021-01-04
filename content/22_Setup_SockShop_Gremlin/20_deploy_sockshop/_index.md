+++
title = "1.2 Deploy the SockShop"
chapter = false
weight = 02

+++



 In the case you need to grab the `kubeconfig` from AWS. You can do that by first looking for the name of the cluster using `eksctl`:
```
eksctl get clusters
```

And then grabbing the `kubeconfig` from AWS.
```
 aws eks --region us-west-2  update-kubeconfig --name sockshop-eks-cluster
```

You should now be able to view your cluster with `kubectl`

```
kubectl get nodes
```

Now, you can deploy your sock shop

First clone the repo below and and go into the deploy/kubernetes folder.

```
git clone https://github.com/microservices-demo/microservices-demo
```
Create the namespace

```
kubectl create namespace sock-shop
```
Deploy the application

```
kubectl apply -f complete-demo.yaml
```
🎉 Congrats, you've deployed the demo application on your cluster.





