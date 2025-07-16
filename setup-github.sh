#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Setting up GitHub repository for AIB Solutions...${NC}"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${RED}Git repository not initialized. Please run 'git init' first.${NC}"
    exit 1
fi

# Check if we have commits
if ! git log --oneline -1 > /dev/null 2>&1; then
    echo -e "${RED}No commits found. Please commit your changes first.${NC}"
    exit 1
fi

# Repository details
REPO_NAME="aib-solutions"
REPO_URL="https://github.com/GitFarhanS/$REPO_NAME.git"
DESCRIPTION="Enterprise AI Platform - Secure, on-premises AI solutions with custom model training and full data privacy"

echo -e "${YELLOW}Repository Details:${NC}"
echo "Name: $REPO_NAME"
echo "URL: $REPO_URL"
echo "Description: $DESCRIPTION"
echo ""

echo -e "${YELLOW}Please follow these steps:${NC}"
echo "1. Go to https://github.com/GitFarhanS"
echo "2. Click 'New' or 'Create repository'"
echo "3. Set repository name to: $REPO_NAME"
echo "4. Set description to: $DESCRIPTION"
echo "5. Make it Public"
echo "6. DO NOT initialize with README (we already have one)"
echo "7. Click 'Create repository'"
echo ""

read -p "Have you created the repository on GitHub? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${GREEN}Great! Now pushing code to GitHub...${NC}"
    
    # Add remote origin
    git remote add origin $REPO_URL 2>/dev/null || git remote set-url origin $REPO_URL
    
    # Push to GitHub
    if git push -u origin main; then
        echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
        echo -e "${GREEN}Your repository is now available at: $REPO_URL${NC}"
    else
        echo -e "${RED}❌ Failed to push to GitHub.${NC}"
        echo -e "${YELLOW}Please check:${NC}"
        echo "1. Repository exists on GitHub"
        echo "2. You have proper authentication set up"
        echo "3. You have write access to the repository"
    fi
else
    echo -e "${YELLOW}Please create the repository first and then run this script again.${NC}"
fi 