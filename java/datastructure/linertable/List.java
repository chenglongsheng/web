package com.datastructure.linertable;
/*
 * ���Ա�ӿ�
 * 
 */
public interface List {

	//��������Ԫ��e �����Ա��е����
	public int size();
	
	//�������Ա������Ϊ1������Ԫ��
	public Object get(int i);
	
	//������Ա�Ϊ�շ���true�����򷵻�false
	public boolean isEmpty();
	
	//�ж����Ա��Ƿ��������Ԫ��e
	public boolean contains(Object e);
	
	//��������Ԫ��e �����Ա��е����
	public int indexOf(Object e);
	
	//������Ԫ��e���뵽���Ա���i ��λ��
	public void add(int i,Object e);
	
	//������Ԫ�� e ���뵽���Ա�ĩβ
	public void add(Object e);
	
	//������Ԫ�� e ���뵽Ԫ��obj֮ǰ
	public boolean addBefore(Object obj,Object e);
	
	//������Ԫ�� e ���뵽Ԫ��obj֮��
	public boolean addAfter(Object obj,Object e);
	
	//ɾ�����Ա������Ϊi ��Ԫ�أ�������֮
	public Object remove(int i);
	
	//ɾ�����Ա��е�һ����e ��ͬ��Ԫ��
	public boolean remove(Object e);
	
	//�滻���Ա������Ϊi ������Ԫ��Ϊe ,����ԭ����Ԫ��
	public Object replace(int i,Object e);

}
