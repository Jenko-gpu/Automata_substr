function CreateTable(t){
    m = t.length;
    alph = new Array();
    for (i = 0; i<m;i++){
        alph[t.charAt(i)] = 0;
    }

    del = new Array(m+1);

    for (j = 0; j<m+1; j++){
        del[j] = new Array();
    }

    for (i in alph){
        del[0][i] = 0;
    }

    for(j=0;j<m;j++){
        prev=del[j][t.charAt(j)];
        del[j][t.charAt(j)]=j+1;
        for(i in alph)
            del[j+1][i]=del[prev][i];
            
    }
    return del;
}

function FindSubst(string, Table) {
    let i = 0;
    let j = 0;
    let ans = new Array;
    while (i<string.length){
        let c = string.charAt(i);
        if (!(c in Table[0])) {
            j = 0;
            i++;
            continue;
        }
        j = Table[j][c];
        if (j == Table.length-1) ans.push(i-j+1);
        i++;
    }
    return ans;
}
exports.CreateTable = CreateTable;
exports.FindSubst = FindSubst;
//export {CreateTable, FindSubst};