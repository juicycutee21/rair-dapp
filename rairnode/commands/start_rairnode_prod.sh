#!/bin/bash

echo "Starting Rairnode with PROD boot script 11111"

GCP_PROJECT_ID=$(gcloud config get-value project)

# Manually set this to match the resource names that are generated by Terraform
VAULT_ROLE_ID_RESOURCE_NAME="gke-vault-role-id-rairnode"
VAULT_SECRET_ID_RESOURCE_NAME="gke-vault-secret-id-rairnode"
SERVICE_ACCOUNT="gke-rairnode@rair-market-dev.iam.gserviceaccount.com"

echo "auth list"
gcloud auth list

echo "Getting secret: $VAULT_ROLE_ID_RESOURCE_NAME..."
export VAULT_RAIRNODE_APP_ROLE_ID=$(gcloud secrets versions access latest --project=$GCP_PROJECT_ID --secret="$VAULT_ROLE_ID_RESOURCE_NAME")

echo "Getting secret: $VAULT_SECRET_ID_RESOURCE_NAME..."
export VAULT_RAIRNODE_APP_ROLE_SECRET_ID=$(gcloud secrets versions access latest --project=$GCP_PROJECT_ID --secret="$VAULT_SECRET_ID_RESOURCE_NAME")

echo "Running npm start..."
# fire the container as normal
npm start