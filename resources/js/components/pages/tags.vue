<template>
	<div>
		<div class="content">
			<div class="container">

				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags <Button><Icon type="md-add" /> Add tag</Button> </p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>ID</th>
								<th>Tag name</th>
								<th>Created at</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr>
								<td>1</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
									<Button type="info" size="small">Edit</Button>
									<Button type="error" size="small">Delete</Button>
								</td>
							</tr>
								<!-- ITEMS -->

						</table>
					</div>
				</div>
				 <!-- <Page :total="100" /> -->

			</div>
		</div>
	</div>
</template>


<script>
export default {

	async created(){
		const res = await this.callApi('post', '/app/create_tag', {tagName: 'testtag'});

		if(res.status == 200){
			// console.log(res);
		}else{
			console.log('running');
		}

	}
}
</script>

			