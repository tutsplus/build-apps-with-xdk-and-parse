(function()
 {
    
     data_event_handlers.on_data_proplist["standard-list"] = function(selector)
                                                            { 
                                                                return function(data){  $(selector).parent().listview("refresh"); };
                                                            };
     
     
 })();