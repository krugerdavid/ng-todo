export const AppComponent = {  
  template: `
  	
    <section class="wrapper">
    	<div class="container-fluid">
    		<div class="row">
					<div class="col-md-6 col-xs-12 todo-wrapper">
						<div ui-view></div>
					</div>
          <div class="col-md-6 hidden-xs bg-wrapper"></div>
    		</div>
    	</div>
    </section>
  `
}