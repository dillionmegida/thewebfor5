---
title: Dealing with DJVU ransomware viruses like .grod and .peet
date: 11-18-2019
readTime: 3 mins
pageDescription: >-
  DJVU ransomware is a virus which encrypts files stored in a user's computer
  with certain ciphers. The virus usually leaves a note in several locations of
  the user's system which contains the requirements on recovering the encrypted
  files
pageKeywords: >-
  djvu, ransomware, virus, djvu virus, virus attack, photorec, shadow explorer,
  recover .grod files, peet, grod
tags: ["general"]
---
**Disclaimer:** This is not a front-end article neither is it about a programming language. It's a little not-so-exciting experience I had recently and thought it right to share.

## Table of Contents
- My little story
- DJVU Ransomware
  - What it is
  - Examples
  - How it gets into a system
- Dealing with .grod virus
  - Removing the virus
  - Recovering files
- Guides on preventing virus attacks
- Tips on Good File Management
- Conclusion

### My Little Story
On 14th November, 2019, my personal computer got infected by the 'best' (in the negative) virus I've ever heard of. Other infections I've heard of would limit things you can do in your system or wouldn't allow you turn it on but you could still gain access to your files.
This virus - DJVU Ransomware, encrypted almost all files in my system and also added a .grod extension to them but surprisingly allowed me to use my system with installed applications. At first, I removed the .grod extension hoping my files would restore but I discovered it was more than that.

It also left a _readme.txt file in several locations of my system which contained the requirement for recovering my files. The requirement was paying a ransom of $980 (or $490 if response was within 72hrs) to get all my files decrypted. Where would I get such amount from?

This prompted my research and the following information.

### DJVU Ransomware
#### What it is
DJVU ransomware is a virus which encrypts files stored in a user's computer with the use of certain ciphers. The virus usually leaves a note in several locations of the user's system which contains the requirements on recovering the encrypted files.

#### Examples
Examples include .grod, .peet, .toec, .nakw, derp, .coot to name a few.

#### How does it get into a system
It usually gains access through malicious mail attachments, application cracks, keygens and few other suspicious means.<br/>
**Confession:** I actually  tried downloading a cracked application which was my way of inviting the virus : (

### Dealing with .grod virus
I was affected with .grod. Hence, the solutions would be more particular about this as there may be little differences when compared with other types. Though, they are classified as DJVU viruses so solutions could still apply to others.

#### Removing the virus
I came across many solutions while going through websites and articles, some of which I applied.
Two major articles I read are:
- [How To Remove GROD Ransomware (Virus Removal Guide)](https://malwaretips.com/blogs/remove-grod-virus/)
- [Grod file extension. Remove Grod virus. Restore, Decrypt .grod files](https://www.myantispyware.com/2019/11/14/grod-file-extension-remove-grod-virus-restore-decrypt-grod-files/)

##### Solutions I applied:
_From the first article above_
- I installed [Malwarebytes Free](https://malwaretips.com/download-malwarebytes) to remove the GROD Ransomware
- I also installed [Emsisoft Emergency Kit](https://malwaretips.com/download-emsisoft) to scan for malware and unwanted programs
- Lastly, I installed [Emsisoft Decryptor for STOP Djvu](https://www.emsisoft.com/ransomware-decryption-tools/stop-djvu) which decrypts files which were encrypted with an offline key. This tool didn't aid any solution as all my files were encrypted with an online key. You could try your luck nonetheless.

_From the second article above_
- I installed [Shadow Explorer](https://www.myantispyware.com/download/shadowexplorer). This tool recovers shadow copies of files saved on a computer system. <br/>
From the article,
> Shadow Volume Copies are copies of files and folders that Windows 10 (8, 7 and Vista) automatically saved as part of system protection. This feature is fantastic at rescuing photos, documents and music that were encrypted by Grod virus. The guide below will give you all the details.

I was able to recover my files but almost none of them were still accessible. My images were displaying a brown skin and my files couldn't be opened. This tool didn't work for me but you could give it a try.
- I also installed [PhotoRec](https://www.myantispyware.com/download/photorec) which also helps in restoring files. This tool was a life-saver for me. I didn't retrieve all files but the amount I could recover were encouraging.
- I also discovered that the virus didn't have access to my Recycle Bin. There was nothing worth restoring from there, but you could check if you're infected.
- Lastly, I discovered that there was a limit of folder levels which the virus could access. I was able to easily recover files stored in deeply nested folders.

#### Guides on preventing virus attacks
- **STOP DOWNLOADING CRACK APPLICATIONS!!!** I wouldn't even need anyone to repeat this to me. I understand that some of us may be trying to enjoy the full benefits of an application without having to pay a dime (which may be huge) but if you are unlucky, an application could cost you your computer system and possibly, your life.
- For Windows Users, always try to update your Windows Defender. My excuse to not updating my Windows Defender regularly is as a result of the poor network in my place of residence. But, always try to. If mine was updated, high chances are that windows would have alerted me and prevented me from installing the downloaded application.
- Avoid suspicious attachments in mails most especially, spams. These attacks come in different fancy ways. Please be guided.
- Also, be careful of the external devices you connect to your computer.

#### Tips on Good File Management
##### - Cloud Storage
Peradventure you're a google fan and you have a google account, always ensure to make use of the free storage provided. An alternative to this is DropBox, Onedrive to mention a few.<br/>
I didn't feel much hurt knowing that some of my files were recently uploaded to Google Drive.
##### - External Hard Drive
Added to cloud storage, you could use an external hard drive to store your important files

#### Conclusion
To be honest, I'm sad when I remember some files I lost but this is also an opportunity to start afresh and taking the above advice into more considerations. Another new start is I'd be migrating to Linux : ) <br/>
It's actually going to cost me some windows applications like my precious Adobe Tools but I read on [Proton Wine](https://github.com/ValveSoftware/Proton) which could be a manageable solution to running such applications on Linux.

You may have experienced this, you probably haven't, but please take the prevention curing means into consideration.

Thanks for reading : )

Kindly share comments on your experiences with DJVU Ransomware. I would love to read your stories : )
