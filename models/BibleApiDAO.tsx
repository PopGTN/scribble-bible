import {useState} from "react";

class BibleApiDAO {
    private baseUrl: string;




    constructor(baseUrl = "https://bible-api.com/data") {
        this.baseUrl = baseUrl;
    }

    async fetchFromApi(endpoint: string): Promise<any> {

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`).;
            const json = await response.json();
            setData(json.movies);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("API fetch error:", error);
            throw error;
        }
    }

    async getTranslations() {
        return await this.fetchFromApi("");
    }

    async getBooks(translationId = "web") {
        return await this.fetchFromApi(`/${translationId}`);
    }

    async getChapters(translationId = "web", bookId: any) {
        if (!bookId) throw new Error("Book ID is required");
        return await this.fetchFromApi(`/${translationId}/${bookId}`);
    }

    async getVerses(translationId = "web", bookId: any, chapter: any) {
        if (!bookId || !chapter) throw new Error("Book ID and chapter are required");
        return await this.fetchFromApi(`/${translationId}/${bookId}/${chapter}`);
    }

    async getRandomVerse(translationId: any = "web", bookIds: any = "") {
        const endpoint = bookIds ? `/${translationId}/random/${bookIds}` : `/${translationId}/random`;
        return await this.fetchFromApi(endpoint);
    }
}

export default BibleApiDAO;
