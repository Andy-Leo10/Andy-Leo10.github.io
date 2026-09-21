<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/TP3-hyper-personalized-emails" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Hyper-personalized Email Campaigns

## Summary

Multi-agent system that, given a bank client's profile (JSON) and the current campaign catalog, generates a **hyper-personalized marketing email** together with an **AI-generated image**, running **100% on local hardware**: the text is produced by LLM agents served with Ollama and the images with Z-Image-Turbo on the GPU.

<img src="content/file21--hyper-personalized-emails/pictures/architecture.png" alt="Multi-agent system architecture: campaign selector, email writer, image prompt agent and image composer" width="100%"/>

## Objectives

- Design a chain of LLM agents that selects the most relevant campaign for each client and writes a personalized email in the bank's tone
- Generate a custom promotional image per client with a local diffusion model
- Keep the whole pipeline offline: no cloud APIs, no data leaving the machine

## Technical approach

- **Agent 1 — Campaign selector:** picks the most aligned campaign and 1-2 related promotions from the client's profile
- **Agent 2 — Email writer:** drafts the email using only the selected promotions, in the bank's tone
- **Agent 3 — Image prompt generator:** translates the campaign into a positive English prompt for the diffusion model
- **Image generation:** Z-Image-Turbo (8-bit on GPU, text encoder on CPU) with Pillow composition of the final email (text + image + brand band)
- **Model selection:** 4 local LLMs (qwen2.5:14b, llama3.1:8b, gemma4:12b, deepseek-r1:8b) evaluated on 3 clients; qwen2.5:14b won for all three agents
- **VRAM management:** Ollama runs with `keep_alive=0` between calls so the LLM and the image pipeline do not compete for the 12 GB GPU

## Technologies

- Python, Ollama (qwen2.5:14b)
- Z-Image-Turbo, diffusers, bitsandbytes
- Pillow, ipywidgets

## Results

Final compositions (`correo_final_CXXX.png`) were generated for 8 client profiles, each with a unique campaign, text and image.

<img src="content/file21--hyper-personalized-emails/pictures/result.png" alt="Final generated email: personalized summer campaign text with AI-generated image for client C001" width="100%"/>
