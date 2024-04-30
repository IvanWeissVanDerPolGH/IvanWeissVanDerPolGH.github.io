---
layout: page
title: My Travels
permalink: /travels/
---

{% assign trips = site.data.Pages.travels %}

# My Travel Adventures

Here's a recap of my journeys across the globe. Click on each trip to learn more about my experiences.

{% for trip in trips %}
## [{{ trip.tripName }}]({{ trip.tripName | slugify }})

**Destination:** {{ trip.destination }}
**Date:** {{ trip.startDate | date: "%b %d, %Y" }} - {{ trip.finishDate | date: "%b %d, %Y" }}
**Purpose:** {{ trip.reasonForTravel }}

{{ trip.description | truncatewords: 30 }}

![{{ trip.images[0].description }}]({{ trip.images[0].src }})

[Read more about {{ trip.tripName }}]({{ trip.tripName | slugify }})
{% endfor %}
