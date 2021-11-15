import { Bool } from "aws-sdk/clients/clouddirectory";


export default interface DiscoverMoviesDto {
    id: Number,
    adult: Boolean,
    backdrop_path: String,
    genre_ids: Array<number>,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: Date,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number
}