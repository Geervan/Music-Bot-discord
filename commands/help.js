exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Help',
            description: `
            !play <songName> - Play a song from youtube
            !pause - Pause music
            !resume - Resume music
            !np - Get now playing song's info
            !skip - Skip to next song
            !stop - Stop playing music
            !volume <value> - Adjust volume of the music
            !queue - To see the full song queue
            !lyrics - To display the lyrics of the currently playing song
                                                           Bot presented by Sheldon Cooper #1587
            `,
            color: 'GREEN'
        }
    })
}
