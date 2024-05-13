
# Project Quoise Gaming

Welcome to Project Quoise Gaming, the revolutionary framework for creating AI-powered blockchain games using smart contracts and various AI platforms on the [Quoise Chain](https://app.conduit.xyz/published/view/quoise-asgxak2pra). Our goal is to democratize the development of blockchain games, making it accessible to everyone from hobbyists to professional developers.

## Introduction

Project Quoise Gaming was born out of a passion for the Mode ecosystem, discovered during the ['Mode DeFi Degen Hack.'](https://www.mode.network/hackathon) This project aims to combine the worlds of memes, AI, and blockchain into a single, cohesive platform that simplifies and enhances the game development process. Operating on the Quoise Chain, a state-of-the-art Layer 3 network built atop Mode and integrated with Celestia, Project Quoise ensures unparalleled data availability for seamless and scalable gaming experiences.

## Network

**Quoise Chain:** Our platform operates on the L3 Quoise Chain. This network builds on the robust foundation of Mode network and utilizes Celestia's technology for high data availability, offering:

- [Overview of netowrk](https://app.conduit.xyz/published/view/quoise-asgxak2pra)
- [Quoise bridge](https://quoise-asgxak2pra.testnets.rollbridge.app/)
- [Explorer](https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/)


## Features

- **AI-Powered Storytelling**: Dive into game development with AI-driven narratives, like our prototype story game where a detective, powered by AI, solves thrilling mysteries.
- **Ease of Use**: Designed with simplicity in mind, our framework allows even those with minimal programming experience to create engaging games. If my grandma can do it, so can you!
- **Streamlined Blockchain Integration**: Leveraging our Oracle Contracts, you can integrate cutting-edge AI models from platforms like DALL-E, managed through a seamless backend process that ensures timely delivery of AI-generated content.

## How It Works

1. **Request Initiation**: Initiate a request from your contract to our Oracle Contract.
2. **Oracle Activation**: The request is processed by the Oracle Contract and forwarded to the Oracle Backend.
3. **API Interaction**: The backend fetches results from the DALL-E API, focusing on efficiency and speed.
4. **Data Return**: AI-generated data is returned to the Oracle Contract, which triggers a callback function.
5. **Callback Execution**: The cycle completes as the Oracle Contract sends the DALL-E response back to your contract.

While this process is not instantaneous, it is optimized to be as quick as possible without sacrificing the quality of the AI-generated outputs.

## Future work

### Marketplace

Project Quoise Gaming isn't just a tool; it's a thriving marketplace for AI-powered games. Here’s what you can expect:
- **A Hub of Innovation**: A vibrant community where developers can share, collaborate, and innovate.
- **Seamless Integration**: Our user-friendly tools reduce the typical complexities associated with blockchain and AI, making game creation a breeze.
- **Diverse Offerings**: From strategy games to RPGs and educational puzzles, the possibilities are limitless.

## Demo

Experience our technology firsthand through our demo, which utilizes the Groq API for story generation and DALL-E for visual content creation. Discover the potential of Project Quoise Gaming and let your imagination take the lead.

## Getting Started

To begin creating your AI-powered blockchain game, follow the installation and setup instructions below:
```bash
# Clone the repository
git clone https://github.com/malawadd/mode24.git

# Navigate to the project directory
cd mode24

```

follow readme in both contracts and oracle directories to setup the framework.

after head to the gameapp directory to start the game 



## contracts 

### Quoise Chain
oracle contract : [0xAe467A4CfCe5310C50E2b2A1ad30768A02155fAC](https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/0xAe467A4CfCe5310C50E2b2A1ad30768A02155fAC)

game contract : [0x07817D2d20493Df58850a32e46b993d959e39c04](https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/0x07817D2d20493Df58850a32e46b993d959e39c04)

nft  contract : [0x24c23a634dC1dD033Dc2B2063bc689BD35BE610f](https://explorerl2new-quoise-asgxak2pra.t.conduit.xyz/address/0x24c23a634dC1dD033Dc2B2063bc689BD35BE610f)

