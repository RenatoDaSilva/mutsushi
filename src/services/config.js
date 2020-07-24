import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycbyqEJ9-Ahyq9f2MMWPPhtTZrHZI0CF1rJiQGA8WXq_wJkpFqYI/exec'
})