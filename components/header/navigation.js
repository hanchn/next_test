export default () => (
  <div className="navigation">
    <div className="li"> 导航 </div> <div className="li"> 导航 </div>
    <div className="li"> 导航 </div> <div className="li"> 导航 </div>
    <div className="li"> 导航 </div> <div className="li"> 导航 </div>
    <div className="li"> 导航 </div>
    <style jsx>{`
      .navigation {
        width: 100%;
        height: 40px;
        position: absolute;
        right: 0;
        bottom: -1px;
      }
      .navigation .li {
        width: auto;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        float: right;
        border: 1px solid transparent;
      }

      .navigation .li:hover,
      .navigation .li.visited {
        cursor: pointer;
        border: 1px solid #ddd;
        border-bottom-color: #fff;
      }
    `}</style>
  </div>
);
