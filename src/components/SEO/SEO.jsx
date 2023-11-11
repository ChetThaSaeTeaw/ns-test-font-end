import { Helmet } from "react-helmet"

export default function SEO({ title , desc , favicon }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta charset="UTF-8" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" itemProp="image" content={favicon} />
      </Helmet>
    </>
  );
};
