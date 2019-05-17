#!/bin/bash
# @author Filippo Finke

for dir in `ls -d */`
do
    echo $dir
    file="${dir}Dockerfile"
    if [ -f $file ]; then
	   echo "# Building..."
	   name=${dir/\//}
	   docker build -t $name ./$dir
	else
	   echo "# Doesn't contain Dockerfile!"
	fi
done
echo "# Finished building..."
