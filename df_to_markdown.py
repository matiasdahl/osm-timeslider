import pandas.core.format as fmt

def df_to_markdown(df, col_aligns, col_filters):
        
    column_names = list(df)

    assert(set(column_names) == set(col_filters.keys()))
    assert(len(col_aligns) == len(column_names))
    
    def apply_filters(row):
        return [col_filters[column_names[s]](row[s]) for s in range(len(row))]

    def align_txt(in_txt):
        output = '---'
        if in_txt == 'r': output = '----:'
        if in_txt == 'l': output = ':----'
        if in_txt == 'c': output = ':---:'
        return output

    def enclose(arr): 
        arr_list = list(arr)
        assert(all([isinstance(x, str) for x in arr_list]))
        return '|' + '|'.join(arr_list) + '|'

    assert(enclose(['1', '2', 'xyz']) == '|1|2|xyz|')

    row_data = [enclose(column_names)] \
     + [enclose(map(align_txt, col_aligns))] \
     + [enclose(apply_filters(df.iloc[i])) for 
                              i in range(len(df))]
    return '\n'.join(row_data)

