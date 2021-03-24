---
title: Installation & Usage
---

### These instructions are based on an Ubuntu 20.04 server.
##### If you have not yet found a suitable hosting provider to host this bot, we can recommend [Hetzner Online GmbH](https://hetzner.cloud/?ref=1sCLayBw4vyG)

## 1. Installing dependencies

```bash
# Update repositories list
apt update && apt upgrade -y

# Install dependencies
apt -y install git libopus-dev ffmpeg youtube-dl apt-transport-https wget sudo

# Load repositories of dotnet
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb

# Update all dependencies
apt update

# Install dotnet
apt install dotnet-sdk-3.1
```

## 2. Download TS3Audiobot
Now we download the files of the TS3Audiobot from the official Bot-Feautre repository

```bash
# Go into the base path
cd /opt

# Clone the repository
git clone https://github.com/Bot-Feature/TS3AudioBot.git
```

## 3. Build the bot with dotnet and first run
Now we build the bot with the following commands 

```bash
# Go into the created repository folder
cd TS3AudioBot

# Build bot with dotnet
dotnet build --framework netcoreapp3.1 --configuration Release TS3AudioBot

# Execute after build
cd /opt/TS3AudioBot/TS3AudioBot/bin/Release/netcoreapp3.1/ && dotnet TS3AudioBot.dll

# Now connect the bot to some Teamspeak, where you can write to the bot
# write the bot with "!getmy uid" for your own teamspeak id | save the uid!
# generate api-token with "!api token" in a private session | save the api token!

# IMPORTANT: replace the useruid (REPLACE-WITH-OWN-UID) with your own uid | not the backslashes!!!

echo "[[rule]]
        # Set your admin Group Ids here, ex: [ 13, 42 ]
        groupid = []
        # And/Or your admin Client Uids here
        useruid = [ \"REPLACE-WITH-OWN-UID\" ]
        # By default treat requests from localhost as admin
        ip = [ \"127.0.0.1\", \"::1\" ]

        \"+\" = \"*\"" > /opt/TS3AudioBot/TS3AudioBot/bin/Release/netcoreapp3.1/rights.toml

# 

```

## 4. Configure the service of the bot
```bash
# Create service file
echo "[Unit]
Description=\"TS3AB-NODE 01\"

[Service]
ExecStart=/usr/bin/dotnet TS3AudioBot.dll
WorkingDirectory=/opt/TS3AudioBot/TS3AudioBot/bin/Release/netcoreapp3.1
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=TS3AB01

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/ts3ab01.service

# Enable service
systemctl enable ts3ab01

# Reload daemon
systemctl daemon-reload

# Start ts3audiobot with the created service
service ts3ab01 start
```

## 5. Configure youtube-dl

```bash
# Installing dependencies of youtube-dl
apt install python

# Download youtube-dl
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

# Now we configure the ts3audiobot
nano /opt/TS3AudioBot/TS3AudioBot/bin/Release/netcoreapp3.1/ts3audiobot.toml

# replace prefer_resolver with YoutubeDl | [factories.youtube]
# replace youtube-dl.path with /usr/local/bin/youtube-dl | [tools]
```

## 6. Add a new host to Bot-Feature

#### Go to [Bot-Feature](https://bot-feature.com/hosts) and add the host by clicking "Create" on the right side 

- The name is used for administrative purposes
- The Hostname is the IP or Domain of the Host / VPS
- The Port is default to 58913
- The API token is the one that was previously created in step 3
