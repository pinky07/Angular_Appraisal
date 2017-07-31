#!/bin/sh
#

#
# 1. Variables
# 

IMAGE_NAME='com.gft.appraisal-tool:latest' 

#
# 1. Stop previous containers.
# 

echo 'Stopping containers based on' $IMAGE_NAME '...'

echo 'Searching for previously running containers...'
CONTAINERS_RUNNING=`docker ps -a -q --filter ancestor=$IMAGE_NAME --format="{{.ID}}"`

if test -n "$CONTAINERS_RUNNING";
then

	echo 'Previously running containers based on the same image are:'
	echo $CONTAINERS_RUNNING

	echo 'Trying to stop previously running containers...'
	CONTAINERS_STOPPED=`docker stop $CONTAINERS_RUNNING`

	if test -n "$CONTAINERS_STOPPED";
	then
		echo "Successfully stopped containers"

		echo "Trying to remove previously running containers"
		CONTAINERS_REMOVED=`docker rm $CONTAINERS_STOPPED`

		if test -n "$CONTAINERS_STOPPED";
		then
			echo "Successfully removed containers"
		else
			echo "ERROR: Couldn't remove previously running containers!"
		fi

	else
		echo "ERROR: Couldn't stop previously running containers!"
	fi

else
	echo 'No previously running containers were found'
fi

#
# 2. Compile application.
#

echo 'Installing Node dependencies...'
npm install
echo 'Successful'

echo 'Compiling Angular application...'
./node_modules/@angular/cli/bin/ng build --prod --env=ci
echo 'Successful'

#
# 3. Build new image.
#

echo 'Building a new Docker image...'
docker build -t $IMAGE_NAME .
echo 'Successful'

#
# 4. Instantiate a new container from the new image.
echo 'Successful'
echo 'Launching new container based on image' $IMAGE_NAME '...'
docker run -d -p 11000:80 $IMAGE_NAME
echo 'Successful'
