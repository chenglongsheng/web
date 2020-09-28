package com.linear;

public class TSingleLinkedList<T> {
	LinkNode<T> head; // ͷ��㣬������׵�ַ

	public TSingleLinkedList() {// �����ʼ��
		super();
		head = new LinkNode<T>(null);// ͷ��㲻��������
	}

	// ������㣬ͷ�巨������
	public void insertAtHead(LinkNode<T> node) {
		node.next = head.next;
		head.next = node;
	}

	// �����ݣ��ȹ���ɽ�㣬ͷ�巨������
	public void insertAtHead(T data) {
		LinkNode<T> node = new LinkNode<T>(data);
		insertAtHead(node);
	}

	// ������㣬β�巨������
	public void insertAtEnd(LinkNode<T> node) {
		LinkNode<T> p = head;
		while (p.next != null) {
			p = p.next;
		}
		p.next = node;
	}

	// ������㣬β�巨������
	public void insertAtEnd(T data) {
		LinkNode<T> node = new LinkNode<T>(data);
		insertAtEnd(node);
	}

	public void showDatas() {
		LinkNode<T> p = head;
		while (p.next != null) {
			System.out.println(p.next.data);
			p = p.next;
		}
	}
	
//	5. ������ĳ���
	public int Size(){
		LinkNode<T> p = head;
		int len=0;
		while(p.next !=null){
			len++;
			p=p.next;
		}
		return len;
	}
//
//	6. ָ��i֮ǰ�������ݽ��
	public void insert(int i,LinkNode<T> node){
		if(i<0){
			System.out.printf("����λ��%d��Ч\n",i);
		}
		LinkNode<T> p = head;
		int index=-1;
		while(p.next !=null){
			index++;
			if(index==i){
				node.next=p.next;
				p.next =node;
				return;
			}
			p=p.next;
		}
		System.out.printf("����λ��%d��Ч�������λ��Ϊ%d\n",i,index);
		
	}
	//�������ݣ�����ɽ�㣬�ٲ���ָ��λ��
	public void insert(int i,T s){
		LinkNode<T> LinkNode = new LinkNode<T>(s);
		insert(i,LinkNode);
	}
	
//	7. ɾ��ָ�����,��λ��ɾ�� 
	public void delete(int i){
		if(i<0){
			System.out.printf("ɾ��λ��%d��Ч\n",i);
			return;
		}
		LinkNode<T> p=head;
		int index=-1;
		while(p.next!=null){
			index++;
			if(index==i){
				p.next=p.next.next;
				return;
			}
			p=p.next;
		}
		System.out.printf("ɾ��λ��%d��Ч�������λ��Ϊ%d\n",i,index);
	}
	//ָ������ɾ�����
	public void delete(T data){
		LinkNode<T> p=head;
		while(p.next!=null){
			if(p.next.data.equals(data)){
				p.next=p.next.next;
				return;
			}
			p=p.next;
		}
	}
	
	
	
//	8. ��ȡ��i��λ�õĽڵ�
	public LinkNode<T> get (int i){
		if(i<0){ //�ж�i����С��0
			System.out.printf("��ȡλ��%d��Ч\n",i);
			return null;
		}
		
		LinkNode<T> p=head;  //��ͷ
		int index=-1;		//����
		while(p.next!=null){
			index++;
			if(index==i){		//p.next����λ���Ƿ�ΪҪ��ȡ�Ľ��
				return p.next;
			}
			p=p.next;
		}
		return null;
	}
}

// ���� �е�ÿ��������ͣ����� data,next
class LinkNode<T> {
	T data;
	LinkNode<T>  next; // Ĭ��Ϊ��

	public LinkNode(T data) {
		super();
		this.data = data;
	}
}


