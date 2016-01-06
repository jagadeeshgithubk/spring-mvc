Ext.application({
	name:'MyApp',
	appFolder:'com',
	autoCreateViewport : true,
	modals:['MyApp.model.DemoModel'],
	stores:['MyApp.store.DemoStore'],
	controllers:['DemoController'], 
	launch : function(){
		alert('Your first application launched with ExtJS MVC..!');	
        }
});
