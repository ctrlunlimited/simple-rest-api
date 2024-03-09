### Part 3: Deployment in a Production Environment

1. Create two kubernetes manifest files for Deployment and Service to run the application

a. deployment.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rest-api
spec:
  replicas: 3  
  selector:
    matchLabels:
      app: rest-api
  template:
    metadata:
      labels:
        app: rest-api
    spec:
      containers:
      - name: rest-api
        image: domogun/simple-rest-api:tag   # or your-image-name:your-image-tag
        ports:
        - containerPort: 3000

```

b. rest-svc.yaml

```
apiVersion: v1
kind: Service
metadata:
  name: rest-api
spec:
  selector:
    app: rest-api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: NodePort  

```

2. Apply the Kubernetes manifests:
```
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
```

3. verify the deployments

```
kubectl get pods  # Check if pods are running
kubectl get svc   # Get the NodePort of the service
```
4. Access the rest API

You can access the REST API at `http://Node-IP-Address:NodePort`
