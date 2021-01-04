+++
title = "1.6 Deploy Gremlin"
chapter = true
weight = 07
+++

# Gremlin Deploy

Let's find your credentials, click the **Avatar** Icon on the top right, and click **“Team Settings"**:

![Gremlin Navigation to Team Settings](/images/gremlin/gremlin_people_team.png)

Select the “Configuration” tab:


We will go back to our terminal and start by adding the repo for the Gremlin Helm chart:
```
helm repo add gremlin https://helm.gremlin.com

```

**If you are running this workshop on your own**, create a namespace for the Gremlin Kubernetes client:
```
kubectl create namespace gremlin
```

Next, you will run the `helm` command to install the Gremlin client. In this command there are three placeholder variables that you will need to replace with real data. Replace `$GREMLIN_TEAM_ID` with your Team ID, and replace `$GREMLIN_TEAM_SECRET` with your Secret Key as well. You also want to replace `$GREMLIN_CLUSTER_ID` with any unique name for your cluster.
```
    helm install gremlin gremlin/gremlin \
    --namespace gremlin \
    --set gremlin.secret.managed=true \
    --set gremlin.secret.type=secret \
    --set gremlin.secret.teamID=$GREMLIN_TEAM_ID \
    --set gremlin.secret.clusterID=$GREMLIN_CLUSTER_ID \
    --set gremlin.secret.teamSecret=$GREMLIN_TEAM_SECRET
```
Let's go back to the Gremlin UI to find our `$GREMLIN_TEAM_ID` and `$GREMLIN_TEAM_SECRET`. 

![Gremlin Navigation to Configuration](/images/gremlin/gremlin_config.png)

Go ahead and copy your **Team ID**, and press **“Reset”** in **Secret Key.** Make sure to copy the Key. 

Congrats! 🎉 You've deployed Gremlin to your cluster. Head over to https://app.gremlin.com/clients/infrastructure to verify your installation on the Gremlin UI. 

![Gremlin Clients View](/images/gremlin/gremlin_ui_clients.png)
