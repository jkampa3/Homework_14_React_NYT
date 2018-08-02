const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    articleTitle: { type: String, required: true },
    articleAuthor: { type: String, required: true },
    articleSummary: { type: String, required: true },
    dateOfArticle: { type: String, required: true },
    weblink: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;