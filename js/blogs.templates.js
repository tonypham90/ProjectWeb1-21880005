(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blogs-categories-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li>\n      <a\n        href=\"#blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":38}}}) : helper)))
    + "\"\n        class=\"text-black-50 text-decoration-none\"\n        onclick=\"loadBlogsPage('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":49},"end":{"line":9,"column":55}}}) : helper)))
    + "')\"\n      >"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":7},"end":{"line":10,"column":15}}}) : helper)))
    + "</a>\n    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Categories</h1>\n<!-- vung chua danh sach cataloge -->\n<ul class=\"py-3\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['blogs-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"clearfix py-3\">\n          <!-- name -->\n          <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":22}}}) : helper)))
    + "</h3>\n          <!-- detail update -->\n          <p class=\"text-black-50\">\n            by\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":22}}}) : helper)))
    + "\n            in\n            <a\n              href=\"#\"\n              onclick=\"loadBlogsPage('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"categoryId") || (depth0 != null ? lookupProperty(depth0,"categoryId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryId","hash":{},"data":data,"loc":{"start":{"line":13,"column":55},"end":{"line":13,"column":69}}}) : helper)))
    + "')\"\n            >"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\n            on\n            "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":31}}}))
    + ".\n            <a\n              href=\"#blogs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":27},"end":{"line":18,"column":33}}}) : helper)))
    + ",true\"\n              onclick=\"loadDetailsBlog("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":39},"end":{"line":19,"column":45}}}) : helper)))
    + ", true)\"\n            >Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\n          </p>\n\n          <img\n            src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":24,"column":17},"end":{"line":24,"column":30}}}) : helper)))
    + "\"\n            class=\"img-thumbnail rounded-4 float-start me-3 my-1\"\n            alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":17},"end":{"line":26,"column":25}}}) : helper)))
    + "\"\n          />\n          <p class=\"text-black-50\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":23}}}) : helper)))
    + "\n          </p>\n          <a href=\"#blogs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":26},"end":{"line":31,"column":32}}}) : helper)))
    + ", false\" class=\"btn btn-link readmore ps-0\" onclick=\"loadDetailsBlog("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":101},"end":{"line":31,"column":107}}}) : helper)))
    + ",false)\">Read more</a>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <nav aria-label=\"Page navigation\">\n          <ul class=\"pagination\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":49,"column":21}}})) != null ? stack1 : "")
    + "          </ul>\n        </nav>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":14},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":48,"column":25}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"page-item disabled\" aria-current=\"page\">\n                  <a class=\"page-link\" href=\"#\" onclick=\"loadBlogsPage('"
    + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
    + "',"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":41,"column":91},"end":{"line":41,"column":99}}}) : helper)))
    + ")\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":41,"column":102},"end":{"line":41,"column":110}}}) : helper)))
    + "</a>\n                </li>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"page-item\">\n                  <a class=\"page-link\" href=\"#\" onclick=\"loadBlogsPage('"
    + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
    + "',"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":46,"column":91},"end":{"line":46,"column":99}}}) : helper)))
    + ")\">"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":46,"column":102},"end":{"line":46,"column":110}}}) : helper)))
    + "</a>\n                </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Blog</h1>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":33,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"pagination").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),{"name":"pagination","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":52,"column":21}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['details-blog-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n          <div class=\"clearfix py-3\">\n            <!-- name -->\n            <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":24}}}) : helper)))
    + "</h3>\n            <!-- detail update -->\n            <p class=\"text-black-50\">\n              by\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":24}}}) : helper)))
    + "\n              in\n              <a href=\"#category/"
    + alias4(((helper = (helper = lookupProperty(helpers,"categoryId") || (depth0 != null ? lookupProperty(depth0,"categoryId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryId","hash":{},"data":data,"loc":{"start":{"line":13,"column":33},"end":{"line":13,"column":47}}}) : helper)))
    + "\" onclick=\"loadBlogsPage('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"categoryId") || (depth0 != null ? lookupProperty(depth0,"categoryId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryId","hash":{},"data":data,"loc":{"start":{"line":13,"column":90},"end":{"line":13,"column":104}}}) : helper)))
    + "')\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\n              on\n              "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":33}}}))
    + ".\n              <a href=\"#Comment\" onclick=\"loadDetailsBlog("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":58},"end":{"line":16,"column":64}}}) : helper)))
    + ", true)\">Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\n            </p>\n\n            <img\n              src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":20,"column":19},"end":{"line":20,"column":32}}}) : helper)))
    + "\"\n              class=\"img-thumbnail rounded-4 float-start me-3 my-1\"\n              alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":19},"end":{"line":22,"column":27}}}) : helper)))
    + "\"\n            />\n            <p class=\"text-black-50\">\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":25,"column":14},"end":{"line":25,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n            </p>\n          </div>\n          <div class=\"py-3\" id=\"leave-comment\">\n            <h3>Leave your comments <br />Post Comment as guest</h3>\n            <form action=\"#\" method=\"post\" class=\"text-black-50\" onsubmit=\"addComment(event)\">\n              <input type=\"hidden\" name=\"blogId\" id=\"blogId\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":68},"end":{"line":31,"column":74}}}) : helper)))
    + "\">\n              <div class=\"row\">\n                <div class=\"col-3\">\n                  <label for=\"name\" class=\"form-label\">Name (require)</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"name\"\n                    id=\"name\"\n                    aria-describedby=\"helpId\"\n                    placeholder=\"FullName\"\n                    required\n                  />\n                  <small id=\"helpId\" class=\"form-text text-muted\">Your name</small>\n                </div>\n                <div class=\"col-5\">\n                  <label for=\"\" class=\"form-label\">Email</label>\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    name=\"email\"\n                    id=\"email\"\n                    aria-describedby=\"emailHelpId\"\n                    placeholder=\"abc@mail.com\"\n                    pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                  />\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\" mb-3\">\n                  <textarea name=\"comment\" id=\"comment\" rows=\"3\" placeholder=\"Enter your message\" required class=\" form-control\"></textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"agree\" value=\"1\" required>\n                    <label class=\"form-check-label\" for=\"agree\">Agree to terms and conditions</label>\n                  </div>\n                </div>\n                <div class=\"col text-end\">\n                  <button type=\"submit\" class=\"btn btn-link py-0 my-0\">Submit Comment</button>\n                </div>\n\n              <div class=\"text-center\">\n                <div class=\"text-success\" id=\"responseMessage\"></div>\n              </div>\n            </form>\n          </div>\n          <a name=\"comments\"></a>\n         <div class=\"p-2 text-white-50 bg-dark\">Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</div>\n          <div class=\"py-3\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":12},"end":{"line":93,"column":21}}})) != null ? stack1 : "")
    + "          </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n              <p class=\"text-black-50 py-3\">\n                by\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":87,"column":16},"end":{"line":87,"column":24}}}) : helper)))
    + "\n                on\n                "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":89,"column":16},"end":{"line":89,"column":35}}}))
    + ".\n              </p>\n              <p class=\"text-black-50\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":91,"column":39},"end":{"line":91,"column":50}}}) : helper)))
    + "</p>\n              <hr/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Blog</h1>\n      <div class=\"container py-5 overflow-auto\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":95,"column":17}}})) != null ? stack1 : "")
    + "      </div>";
},"useData":true});
})();