var data_views   = { group:[], single:[], bindings:{}};


data_views.group.push({"model":{"Article":null,"Teaser":null,"Title":null,"pic.url":null},"child":".uib_w_3"});
data_views.single.push({"selector":".uib_w_7","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_3", "intel.xdk.services.parsearticles", ["results"], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_7", "uib_w_3_data", [], "null", data_views);
