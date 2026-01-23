# Inspired from https://github.com/cloudron-io/cloudron-push-to-app/blob/main/docker/app/pkg/start.sh

set -eu -o pipefail


VERSION=$(git rev-parse --short HEAD)
IMAGE_REPO="ruihildt/zorobabel"

# Building docker image
echo "==> Building docker image"
docker build . --no-cache -t $IMAGE_REPO:$VERSION
docker push $IMAGE_REPO:$VERSION

echo "==> Generating Cloudron config"
yq -n '.cloudrons.default = strenv(CLOUDRON_FQDN) | .cloudrons[strenv(CLOUDRON_FQDN)].apiEndpoint = strenv(CLOUDRON_FQDN) | .cloudrons[strenv(CLOUDRON_FQDN)].token = strenv(CLOUDRON_TOKEN)' --output-format=json > ~/.cloudron.json

echo "==> Creating a Cloudron app backup before pushing new code"
cloudron backup create --app ${CLOUDRON_APP_ID}


# Updating cloudron to the docker image.
cloudron update --app ${CLOUDRON_APP_ID} --image $IMAGE_REPO:$VERSION