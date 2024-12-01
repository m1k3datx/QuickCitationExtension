console.log("ENTIRE popup.js is being parsed");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    const generateButton = document.getElementById("generate");
    console.log("Generate button found:", !!generateButton);

    if (generateButton) {
        generateButton.addEventListener("click", function () {
            console.log("Button clicked!");
            console.trace("Trace of button click");

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const activeTab = tabs[0];
                if (activeTab) {
                    console.log("Active tab info:", activeTab);

                    const title = activeTab.title || "Unknown Title";
                    const url = activeTab.url || "Unknown URL";
                    const accessDate = new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });

                    // Website name mapping for popular sites
                    let hostname = new URL(url).hostname.replace('www.', '').replace('en.', '');
                    const websiteNameMapping = {
                        "wikipedia.org": "Wikipedia",
                        "nytimes.com": "The New York Times",
                        "bbc.com": "BBC",
                        "cnn.com": "CNN",
                        "forbes.com": "Forbes",
                        "techcrunch.com": "TechCrunch",
                        "medium.com": "Medium",
                        "npr.org": "NPR",
                        "nationalgeographic.com": "National Geographic",
                        "history.com": "History.com",
                        "britannica.com": "Encyclopedia Britannica",
                        "scholar.google.com": "Google Scholar",
                        "jstor.org": "JSTOR",
                        "pubmed.ncbi.nlm.nih.gov": "PubMed",
                        "sciencedirect.com": "ScienceDirect",
                        "springer.com": "Springer",
                        "nature.com": "Nature",
                        "pnas.org": "PNAS",
                        "time.com": "TIME",
                        "hbr.org": "Harvard Business Review",
                        "smithsonianmag.com": "Smithsonian Magazine",
                        "apa.org": "American Psychological Association",
                        "plos.org": "PLOS",
                        "edx.org": "edX",
                        "coursera.org": "Coursera",
                        "udemy.com": "Udemy",
                        "khanacademy.org": "Khan Academy",
                        "ted.com": "TED",
                        "cambridge.org": "Cambridge University Press",
                        "oup.com": "Oxford University Press",
                        "sagepub.com": "SAGE Publications",
                        "psychologytoday.com": "Psychology Today",
                        "vox.com": "Vox",
                        "huffpost.com": "HuffPost",
                        "usatoday.com": "USA Today",
                        "reuters.com": "Reuters",
                        "guardian.com": "The Guardian",
                        "theatlantic.com": "The Atlantic",
                        "economist.com": "The Economist",
                        "businessinsider.com": "Business Insider",
                        "msnbc.com": "MSNBC",
                        "nbcnews.com": "NBC News",
                        "washingtonpost.com": "The Washington Post",
                        "latimes.com": "Los Angeles Times",
                        "wsj.com": "The Wall Street Journal",
                        "usnews.com": "U.S. News & World Report",
                        "cnbc.com": "CNBC",
                        "bloomberg.com": "Bloomberg",
                        "sciencemag.org": "Science",
                        "arxiv.org": "arXiv",
                        "newscientist.com": "New Scientist",
                        "livejournal.com": "LiveJournal",
                        "wikihow.com": "wikiHow",
                        "quora.com": "Quora",
                        "reddit.com": "Reddit",
                        "stackexchange.com": "Stack Exchange",
                        "stackoverflow.com": "Stack Overflow",
                        "github.com": "GitHub",
                        "linkedin.com": "LinkedIn",
                        "facebook.com": "Facebook",
                        "twitter.com": "X (formerly Twitter)",
                        "instagram.com": "Instagram",
                        "pinterest.com": "Pinterest",
                        "tumblr.com": "Tumblr",
                        "youtube.com": "YouTube",
                        "tiktok.com": "TikTok",
                        "dailymotion.com": "Dailymotion",
                        "vimeo.com": "Vimeo",
                        "courant.com": "Courant",
                        "slate.com": "Slate",
                        "salon.com": "Salon",
                        "theverge.com": "The Verge",
                        "wired.com": "Wired",
                        "gizmodo.com": "Gizmodo",
                        "cnet.com": "CNET",
                        "macrumors.com": "MacRumors",
                        "9to5mac.com": "9to5Mac",
                        "engadget.com": "Engadget",
                        "zdnet.com": "ZDNet",
                        "pcmag.com": "PCMag",
                        "howtogeek.com": "How-To Geek",
                        "microsoft.com": "Microsoft",
                        "apple.com": "Apple",
                        "adobe.com": "Adobe",
                        "ibm.com": "IBM",
                        "oracle.com": "Oracle",
                        "aws.amazon.com": "AWS",
                        "spotify.com": "Spotify",
                        "netflix.com": "Netflix",
                        "hulu.com": "Hulu",
                        "disneyplus.com": "Disney+",
                        "primevideo.com": "Prime Video",
                        "imdb.com": "IMDb",
                        "rottentomatoes.com": "Rotten Tomatoes"
                    };

                    const websiteName = websiteNameMapping[hostname] || 
                        hostname.charAt(0).toUpperCase() + hostname.slice(1);

                    // MLA citation format
                    const mlaCitation = `"${title}." ${websiteName}, Publisher, Date Published, ${url}. Accessed ${accessDate}.`;

                    console.log("Generated MLA Citation:", mlaCitation);

                    const outputTextarea = document.getElementById("output");
                    if (outputTextarea) {
                        outputTextarea.value = mlaCitation;
                    } else {
                        console.error("No output textarea found!");
                    }
                } else {
                    console.error("No active tab found!");
                }
            });
        });
    } else {
        console.error("No generate button found in the document!");
    }
});

console.log("End of popup.js script");
