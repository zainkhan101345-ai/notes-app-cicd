# Notes App CI/CD Pipeline with Jenkins, Docker & AWS EC2

## Project Overview

This project demonstrates a production-style CI/CD pipeline for a Dockerized Notes Application built with Next.js, Node.js, and MongoDB

Whenever a developer pushes code to the **main** branch, a **GitHub Webhook** automatically triggers a Jenkins pipeline. Jenkins builds and deploys the latest version of the application on an **AWS EC2** instance using Docker Compose.

The deployment process is fully automated and includes container replacement, persistent database storage using an AWS EBS volume, and email notifications upon successful deployment.


# Tech Stack

 Category            Technology              

Frontend           | Next.js                 
Backend            | Node.js                 
Database           | MongoDB                 
Containerization   | Docker & Docker Compose 
CI/CD              | Jenkins                 
Source Control     | GitHub                  
Automation         | GitHub Webhooks         
Cloud              | AWS EC2                 
Persistent Storage | AWS EBS Volume          
Notifications      | Jenkins Email Extension 



# System Architecture

Developer
    │
    ▼
Push Code to GitHub (main)
    │
    ▼
GitHub Webhook
    │
    ▼
Jenkins Pipeline
    │
    ├──────────────► Clone Latest Code
    │
    ├──────────────► Build Docker Images
    │
    ├──────────────► Stop Existing Containers
    │
    ├──────────────► Remove Old Containers
    │
    ├──────────────► Deploy Updated Containers
    │
    ├──────────────► MongoDB Uses AWS EBS Volume
    │
    ├──────────────► Verify Deployment
    │
    └──────────────► Send Success Email
                       │
                       ▼
                 Developer Receives
             ✔ Build Status
             ✔ Website URL

                    │
                    ▼
              AWS EC2 Instance
                    │
                    ▼
             Running Notes App




# CI/CD Workflow

The deployment pipeline performs the following steps automatically:

### 1. Developer Pushes Code

A developer pushes changes to the main branch on GitHub.

### 2. GitHub Webhook

GitHub immediately sends a webhook event to Jenkins.

### 3. Jenkins Starts Pipeline

Jenkins automatically begins the deployment pipeline.

### 4. Clone Repository

The latest source code is cloned from GitHub.

### 5. Build Docker Images

Docker Compose builds the latest application image.

### 6. Stop Existing Containers

Previous application containers are stopped gracefully.

### 7. Remove Old Containers

Old containers are removed to ensure a clean deployment.

### 8. Deploy Latest Version

Docker Compose launches the updated containers.

The deployment consists of three containers:

 Next.js Application
 MongoDB Database
 Mongo Express (Database Management UI)

### 9. Persistent Database

MongoDB stores its data on an AWS EBS volume, ensuring data persists even if the MongoDB container is stopped, removed, or recreated.

### 10. Deployment Verification

Jenkins confirms that all containers are running successfully.

### 11. Email Notification

Once deployment succeeds, Jenkins sends an email containing:

 Build status
 Build number
 Deployment result
 Link to the live application


# Docker Containers

The project runs three Docker containers:

        
 1 Next.js App    Hosts the Notes Application 
 2 MongoDB        Stores application data     
 3 Mongo Express  Web interface for MongoDB   


# Persistent Storage

MongoDB data is stored on an AWS EBS-backed Docker volume.

This ensures that:

 Notes remain available after container restarts.
 Database data is preserved during deployments.
 Containers can be recreated without data loss.


# AWS Deployment

The application is deployed on an AWS EC2 instance.

Jenkins runs directly on the EC2 server and manages Docker deployments automatically after each successful build.


# Email Notifications

After every successful deployment, Jenkins sends an email to the developer containing:

Build status
Build number
Deployment success message
Link to the deployed Notes Application

This allows developers to verify deployments without logging into the server.


# Features

 Automated CI/CD pipeline
 GitHub Webhook integration
 Docker containerization
 Docker Compose deployment
 Automated Jenkins pipeline
 Container replacement deployment
 MongoDB persistent storage using AWS EBS
 Automated email notifications
 AWS EC2 deployment
 Continuous deployment on every push to main


# Screenshots

 GitHub Repository
 GitHub Webhook
 Jenkins Dashboard
 Successful Jenkins Pipeline
 Docker Containers
 Mongo Express
 Running Notes Application
 Email Notification
 AWS EC2 Instance


# Verification

The deployment was verified by:

 Successful Jenkins pipeline execution
 Running Docker containers
 Persistent MongoDB data after container recreation
 Successful webhook trigger from GitHub
 Accessible Notes Application
 Email notification received after deployment


# Future Improvements

Kubernetes deployment
Nginx reverse proxy
HTTPS with Let's Encrypt
Prometheus monitoring
Grafana dashboards
SonarQube code analysis
Trivy image scanning
Blue-Green deployments
Slack or Microsoft Teams notifications


# Learning Outcomes

This project provided practical experience with:

 CI/CD pipeline design
 Jenkins automation
 Docker and Docker Compose
 GitHub Webhooks
 AWS EC2
 Persistent storage with AWS EBS
 MongoDB deployment
 Linux server administration
 Automated application deployment
 Infrastructure automation

# Author

Zain Khan

If you found this project useful, consider giving it a ⭐ on GitHub.

If you have any suggestions, feedback, or would like to discuss potential opportunities or collaborations, feel free to reach out at [zainkhan1980101@hotmail.com](mailto:zainkhan1980101@hotmail.com). I'd be happy to connect.
