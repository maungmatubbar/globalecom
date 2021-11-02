<div class="form-group">
    <label>Select Category Level</label>
     <select name="parent_id" class="form-control select2" style="width: 100%;">
      <option value="0">Main Category</option>
      @if(!empty($categories))
        @foreach($categories as $category)
          <option value="{{ $category->id }}">{{ $category->category_name }}
            @if(!empty($category->subcategories))
              @foreach($category->subcategories as $subcategory)
                <option value="{{ $subcategory->id }}">&nbsp;&raquo;&nbsp;{{ $subcategory->category_name }}</option>
              @endforeach
             @endif
          </option>
        @endforeach
      @endif
    </select> 
    
</div>