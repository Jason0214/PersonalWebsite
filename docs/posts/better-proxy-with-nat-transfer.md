---
title: Better Proxy with NAT Transfer
lang: en-US
date: 2020-05-27
tags: [ network ]
---

I have a proxy server that works well, but recently I was quite suffering from the bad networking (very high latency and packet loss) accessing my server.
I have managed to setup another closeby server to do a NAT transfer, which (at least parially) solved the issue.

<!-- more -->

## NAT through iptables
`iptables` is quite handy to use to setup a NAT.
Set up a TCP NAT only takes two rules, while a UDP one may be more complex.
Here is a TCP exmaple:
``` bash
sudo iptables -t nat -A PREROUTING -p tcp --dport $DST_SERVER_PORT\
    -j DNAT --to-destination $DST_SERVER_IP:$DST_SERVER_PORT
sudo iptables -t nat -A POSTROUTING -p tcp -d $DST_SERVER_IP --dport $DST_SERVER_PORT\
    -j SNAT --to-source $LOCAL_PRIVATE_IP
```

Make the your request send to NAT server set the `dst port` to the listening port of your destination server.
These two rules does not change the `dst port`.

Also remember to tamper the source IP of the packets.
Set it to the NAT server's private IP instead of its public IP.
It could be very common that your rented NAT server is running behind another NAT.

## Verify NAT works
Running `tcptrack` on your NAT server to check the traffic
``` bash
sudo tcptrack -i eth0
```
If the setting is good, you will see two ESTABLISHED connectionss for every incoming TCP connection (exactly a NAT will do).

## Add firewall rule to allow only specific IPs 
If you are sure that clients will connect to your NAT server from a static IP or subnet.
You'd better configure it as a fireware rule, so that bandwidth can be saved from transfering random packets in the network.

``` bash
# New chain
sudo iptables -N NAT_WHITE_LIST

# ACCEPT known IPs, DROP others
sudo iptables -A NAT_WHITE_LIST -d $ALLOWED_DOMAINS -j ACCEPT
sudo iptables -A NAT_WHITE_LIST -j DROP

# Enable chain on INPUT and NAT port 
sudo iptables -A INPUT -p tcp --dport $DST_SERVER_PORT -j NAT_WHITE_LIST
```

