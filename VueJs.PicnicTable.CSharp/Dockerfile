####################################################
# To build your own image: 
#    > docker build -t honosoft/vuejs-picnictable:latest -t honosoft/vuejs-picnictable:1.4.0 .
# To run your image once it's ready:
#    > docker run -d -p 8080:80 --name vuejs-picnictable honosoft/vuejs-picnictable
# To push the image into your docker repository:
#    > docker push honosoft/vuejs-picnictable:latest
# If you wish to remove your dangling images, please do the following (not mandatory)
#    > docker rmi $(docker images -f “dangling=true” -q)
####################################################

# Build the container with Source code compiled
FROM microsoft/dotnet:2.1.500-sdk-alpine3.7 as buildenv
WORKDIR /source
RUN apk add --update nodejs nodejs-npm
COPY *.csproj .
RUN dotnet restore
COPY . .
# Publishing will also restore (install) the npm packages.
RUN dotnet publish -c Release -o /app/

# Stage 2 - Creating Image for compiled app
FROM microsoft/dotnet:2.1.6-aspnetcore-runtime-alpine3.7 as baseimage
RUN addgroup -S coreApp && adduser -S -G coreApp coreApp
RUN apk add --update nodejs nodejs-npm

# Define other environment variable if needed.
ENV ASPNETCORE_URLS=http://+:$port

WORKDIR /app
COPY --from=buildenv /app .
RUN chown -R coreApp:coreApp /app

# Replace the application name if required.
ENTRYPOINT ["dotnet", "VueJs.PicnicTable.CSharp.dll"]
EXPOSE $port
