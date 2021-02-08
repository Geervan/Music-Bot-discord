exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('First join a vc then I will play chatta fellow');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'There is nothing playing right now to pause!'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.pause()
    message.react('⏸')
    message.channel.send('The music has paused Buri Buri')
}