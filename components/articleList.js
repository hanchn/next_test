export default ({ children = "" }) => (
  <div className="article-list">
    <h3>双城故事</h3>
    <div className="date">
      <i></i>
      <time data-time="2010-02-14">2010年02月14日</time>
    </div>
    <div className="article-des">
      作为一个工作单位在深圳，却长期寄居北京的社畜，这两座城市迥然的差异时常让我感到有点人格分裂。尽管都是一线大都市，但它们拥有着完全不同的气质，并且生活得越久，体会得越深。一个终年多雨气候湿润，依山傍水环境宜人，发展飞快节奏变态，难耐的酷暑也挡不住年轻的劳动力们每天像打了鸡血一般；另一个四季分明天干物燥，夏天桑拿冬日雾霾，但仅凭短暂却清爽的春秋时节，又让人恨不起来。
    </div>
    <a className="read-more" href="">
      阅读全文<i></i>
    </a>
    <style jsx>{`
      .article-list {
        overflow: hidden;
        margin-bottom: 40px;
      }
      .article-list h3 {
        color: #555;
        font: bold 25px/1.1 "ff-tisa-web-pro", Cambria, "Times New Roman",
          Georgia, Times, sans-serif;
      }
      .article-des {
        clear: left;
        font-size: 15px;
        line-height: 1.77;
        color: #444;
        padding-top: 4px;
        text-align: justify;
        text-justify: distribute;
        word-break: normal;
      }
      a.read-more {
        font-size: 14px;
        color: #444;
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        float: right;
      }
    `}</style>
  </div>
);
