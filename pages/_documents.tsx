/**
 * documents.tsx는 커스텀 도큐먼트이다
 * 기본으로 생성된 페이지 설정 중 html의 head,body에 대한 부분을 덮어 써주는데 사용한다
 * 스타일을 삽입할때 사용한다.
 */

import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// Create a custom document
export default class MyDocument extends Document {
    // Use getInitialProps for initial server rendering
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });
            
            const initialProps = await Document.getInitialProps(ctx);
            
            return {
                ...initialProps,
                styles: [
                    initialProps.styles,
                    sheet.getStyleElement(),
                ],
            };
        } finally {
            // Seal the stylesheet
            sheet.seal();
        }
    }
}
