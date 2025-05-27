import{f as r,a as t}from"../chunks/D-hE1vav.js";import"../chunks/BkyQyEiz.js";import{s as a,f as i}from"../chunks/DjjVuYvg.js";var h=r("<h1>Using Crontab For Reminders</h1> <pre></pre>",1);function l(n){var e=h(),o=a(i(e),2);o.textContent=`This code runs every hour, on the hour. I want it to continue to run, and I also want a modified version that says "Deep breathing" every hour on the half hour.

#!/usr/bin/env bash
# Auto-detect the current Xauthority cookie file
AUTHFILE=(/tmp/xauth*)
[ -e "\${AUTH_FILE[0]}" ] || exit 1
# Export X11 env for GUI apps
export DISPLAY=:0
export XAUTHORITY="\${AUTH_FILE[0]}"

# Show your hourly reminder
/usr/games/xcowsay -t 0 "Pause. Be mindful."EditI understand! You want to keep your current hourly reminder and add a second one for the half hour. Here's what you need:
Keep your existing script as-is (runs on the hour with "Pause. Be mindful.")
Create a new script for the half-hour reminder:

#!/usr/bin/env bash
# Auto-detect the current Xauthority cookie file
AUTH_FILE=(/tmp/xauth_*)
[ -e "\${AUTH_FILE[0]}" ] || exit 1
# Export X11 env for GUI apps
export DISPLAY=:0
export XAUTHORITY="\${AUTH_FILE[0]}"

# Show your half-hourly reminder
/usr/games/xcowsay -t 0 "Deep breathing"
Save this as something like half-hourly-reminder.sh and make it executable:

chmod +x half-hourly-reminder.sh

Add a second cron job for the half-hour version. Your crontab should now have both:
bash0 * * * * /path/to/your/hourly-reminder.sh
30 * * * * /path/to/your/half-hourly-reminder.sh
This gives you:

On the hour (12:00, 1:00, 2:00...): Cow says "Pause. Be mindful."
On the half hour (12:30, 1:30, 2:30...): Cow says "Deep breathing"

Both reminders will run automatically throughout the day.RetryDSI'm using Ubuntu Studio. Where is the crontab file located?EditIn Ubuntu Studio (and most Linux distributions), crontab files are stored in /var/spool/cron/crontabs/, but you shouldn't edit them directly. Instead, use the crontab command which safely manages them for you.

To edit your personal crontab:
bashcrontab -e
This will open your personal crontab file in your default editor (usually nano)
If it's your first time, it may ask which editor you prefer
Let you add your cron jobs safely

To view your current crontab without editing:
bashcrontab -l
The actual file location for your user would be /var/spool/cron/crontabs/yourusername, but again, always use crontab -e to edit it rather than editing the file directly. The crontab command handles proper formatting and validation.
So to add both your reminders:

Run crontab -e
Add these two lines:
0 * * * * /path/to/your/hourly-reminder.sh
30 * * * * /path/to/your/half-hourly-reminder.sh

Save and exit (Ctrl+X, then Y, then Enter if using nano)

The cron daemon will automatically pick up the changes.`,t(n,e)}export{l as component};
