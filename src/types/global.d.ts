// 可null类型（Nullable Types）可为T类型或是null， 与'undefined'有所区分，undefined不能为其赋值
declare type Nullable<T> = T | null;
