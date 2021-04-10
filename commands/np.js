const { MessageEmbed } = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You have to be in a **Voice channel** to use this command');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: 'Nothing is playing literally nothing'
        }
    })
    message.channel.send({
        embed:{
            title: 'Now Playing',
            description: queue.songs[0].title + ' Requested By: ' + '<@' + queue.songs[0].requester + '>',
            color: 'YELLOW',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}