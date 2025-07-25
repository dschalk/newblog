import{f as l,a as p}from"../chunks/CcU3PJm1.js";import"../chunks/C1z_K0OT.js";import{s as e,f as c,n as u}from"../chunks/CMBpGD-e.js";import{s as d}from"../chunks/ZAEBC58m.js";var h=l(`<h1>Application Maintenance</h1> <p>Using systemd: here's the .service file:</p> <pre></pre> <p>The bash file called by the service file instructs node to execute index.js in the build subdirectory.</p> <pre></pre> <p>Edit the application in VS Code</p> <p>Enter "cd Apps/newblog".</p> <p>Call "npm run build".</p> <p>Push newblog to Github.</p> <p>In the server, cd ~/Apps and run "git pull origin main". For blog (for example), cause "PORT=3007 node build" by calling "sudo systemctl restart blog". Running "sudo systemctl reload nginx" isn't necessary, although it might facilitate instant updating in the browser.</p> <p>CAUTION: Don't include the "build" subdirectory in .gitignore.</p> <p>RECAP: Call "npm run build" on the desktop after revisions, then "git push -u origin main". Navigate to ~/Apps/newblog in the server, and call "git pull origin main". Call "sudo systemctl restart blog". That loads the revised html://localhost:(port) so Nginx can work its reverse-proxy magic on the updated process.</p> <pre></pre> <h3>Log Entries April 29, 2025</h3> <p>schalk2 and newblog in /home/u/Apps are functioning as described above. Useful-Recursive-Closures-in-Javascript, created with Svelte version 4, is bloated wth multiple versions of essential files and numerous JavaScript files used during development. This morning, I am transferring +page.svelte files from Usefull-Recursive-Closures-in-Javascript to a svelte version 5 SvelteKit app named "m-Mx-closures".</p> <!> <br/><br/><br/><br/>`,1);function v(o,i){var t=h(),n=e(c(t),4);n.textContent=`[Unit]
Description=blog.service
After=network.target

[Service]
Type=simple
ExecStart=bash /etc/systemd/system/blog.sh
Restart=on-failure
User=u
Group=u

[Install]
WantedBy=multi-user.target
`;var r=e(n,4);r.textContent=`#! /bin/bash
cd /home/u/Apps/newblog
PORT=3007 node build `;var s=e(r,16);s.textContent=`
cat blog.schalk2.com
server {
    server_name blog.schalk2.com;

location / {
    proxy_pass http://localhost:3007;  # Your SvelteKit port
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    
    # Apply the buffer settings here if you prefer
    proxy_buffer_size 128k;
    proxy_buffers 16 64k;
    proxy_busy_buffers_size 128k;
}

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/recursive-closures.schalk2.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/recursive-closures.schalk2.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = blog.schalk2.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name blog.schalk2.com;
    return 404; # managed by Certbot
} `;var a=e(s,6);d(a,i,"default",{}),u(5),p(o,t)}export{v as component};
