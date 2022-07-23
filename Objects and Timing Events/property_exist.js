function propertyExists(obj,path) 
{
    let val=obj
    for(const property of path)
    {
        val=val[property]
          if(!val)
          return false
    }
 return val
}