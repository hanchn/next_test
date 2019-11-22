export default () => (
  <div className="site-info">
    <h1 className="site-title"> 我的博客 </h1>{" "}
    <span className="site-des"> 我的博客介绍 </span>{" "}
    <style jsx>
      {`
        .site-info {
          width: 200px;
          height: auto;
          overflow: hidden;
          margin-top: 60px;
        }

        .site-info .site-title {
          width: 100%;
          height: 40px;
          margin-bottom: 0px;
          color: #555;
          font: bold 38px/1.12 "Times New Roman", Georgia, Times, sans-serif;
        }

        .site-info .site-des {
          font-size: 14px;
          color: #999;
        }
      `}
    </style>
  </div>
);
