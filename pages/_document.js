import Document, {Html, Head, Main, NextScript} from "next/document";

export default class CutomDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                <meta name="description" content="Web application created to help designers improve their abilities and non-designers to think like a true artist" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript/>
            </Html>
        )
    }
}