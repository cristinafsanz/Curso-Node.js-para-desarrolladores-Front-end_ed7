module.exports = {
    sayHello() {
        return {
            "attachments": [
                {
                    "fallback": "Required plain-text summary of the attachment.",
                    "color": "#36a64f",
                    "pretext": "Optional text that appears above the attachment block",
                    "author_name": "Bobby Tables",
                    "author_link": "http://flickr.com/bobby/",
                    "author_icon": "http://flickr.com/icons/bobby.jpg",
                    "title": "Slack API Documentation",
                    "title_link": "https://api.slack.com/",
                    "text": "Optional text that appears within the attachment",
                    "fields": [
                        {
                            "title": "Priority",
                            "value": "High",
                            "short": false
                        }
                    ],
                    "image_url": "http://my-website.com/path/to/image.jpg",
                    "thumb_url": "http://example.com/path/to/thumb.png",
                    "footer": "Slack API",
                    "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                    "ts": 123456789
                }
            ]
        };
    },

    formatFilms(films) {
        const response = {
           "attachments": []
        };

        films.forEach((film) => {
            const filmResponse = {
                "color": "#36a64f",
                "pretext": film.title,
                "author_name": film.director,
                "title_link": film.url,
                "text": film.description,
                "footer": film.release_date,
                "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            };

            response.attachments.push(filmResponse);
        });

        return response;
    }
}