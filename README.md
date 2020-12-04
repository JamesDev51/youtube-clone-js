# JamesTube_project
 Cloning youtube with using vanilla JS and Node JS.
 
## Pages:

- [x] Home
- [x] Join
- [x] Login
- [ ] Account setting
  - [ ] My channel
    - [ ] Edit Profile
    - [ ] Change Password
    - [ ] Video Detail
      - [ ] Next video 
      - [ ] Edit Video
  - [ ] Youtube studio 
  - [ ] Membership payment 
  - [ ] Log out
  - [ ] Language setting
  - [ ] Location setting
  - [ ] Setting
  - [ ] CS center
  - [ ] Complaining 
- [ ] Popular videos
- [ ] Subscribed videos
- [ ] Stored videos
- [ ] Upload video
- [ ] Search


USER  MODEL에 추가할 항목 
1. SUBSCRIPTION
2. LIBRARY
3. CHANNEL
4. LIKELIST
5. WATCHLIST

To do 
1. searchd
2. 가상키보드 api




                    channelName:video.channel.name,
                    channelId:video.channel.id,
                    channelAvatar:video.channel.avatarUrl,

                                a(href=routes.channel(video.channelId))
                img.channel__avatar(src=video.channelAvatar)
            a(href=routes.channel(video.channelId))
                h6.channel__name=video.channelName
