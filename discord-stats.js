async function updateDiscordCount() {
    try {
        const response = await fetch('https://discord.com/api/guilds/1248148329888485376/widget.json');
        const data = await response.json();
        if (data.presence_count) {
            document.getElementById('online-count').textContent = data.presence_count;
        }
    } catch (error) {
        console.error('Failed to fetch Discord count:', error);
    }
}

updateDiscordCount();
setInterval(updateDiscordCount, 60000); // Update every minute
