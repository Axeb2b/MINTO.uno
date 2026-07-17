#!/bin/bash

echo "🚀 Minto.uno - Cloudflare Pages Deployment"
echo "=========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is clean
echo "📋 Checking git status..."
if [[ -n $(git status -s) ]]; then
    echo "${YELLOW}⚠️  You have uncommitted changes. Please commit or stash them first.${NC}"
    echo ""
    echo "Commands:"
    echo "  git add ."
    echo "  git commit -m 'Your message'"
    echo ""
    exit 1
fi

# Install dependencies
echo "${YELLOW}📦 Installing dependencies...${NC}"
npm install --silent || { echo "${RED}❌ npm install failed${NC}"; exit 1; }
echo "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Run linter
echo "${YELLOW}🔍 Running linter...${NC}"
npm run lint --silent 2>/dev/null || echo "${YELLOW}⚠️  Some lint warnings (non-fatal)${NC}"
echo ""

# Build project
echo "${YELLOW}🔨 Building project...${NC}"
npm run build || { echo "${RED}❌ Build failed${NC}"; exit 1; }
echo "${GREEN}✓ Build successful${NC}"
echo ""

# Push to GitHub
echo "${YELLOW}📤 Pushing to GitHub...${NC}"
git push origin main || { echo "${RED}❌ Git push failed${NC}"; exit 1; }
echo "${GREEN}✓ Pushed to GitHub${NC}"
echo ""

echo "${GREEN}=========================================="
echo "✅ Deployment initiated!"
echo "=========================================="
echo ""
echo "📊 Monitor your deployment at:"
echo "   https://dash.cloudflare.com/pages"
echo ""
echo "🌐 Your site will be live at:"
echo "   https://minto-uno.pages.dev"
echo ""
echo "💡 Tips:"
echo "   - Check build logs in Cloudflare Dashboard"
echo "   - Clear cache if changes don't appear"
echo "   - Test at different screen sizes"
echo ""
